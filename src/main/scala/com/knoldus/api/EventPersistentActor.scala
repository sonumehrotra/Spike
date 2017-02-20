package com.knoldus.api

/**
  * Created by dhirendra on 8/2/17.
  */

import akka.actor._
import akka.persistence._
import com.knoldus.persistence.PlainSQLHelper.UserDetails

case class Command(userDetails: UserDetails)
case class Event(userDetails: UserDetails)

case class PersistEvent(events: List[UserDetails] = Nil) {
  def updated(evt: Event): PersistEvent = copy(evt.userDetails :: events)
  def size: Int = events.length
  override def toString: String = events.reverse.toString
}

class EventPersistentActor extends PersistentActor {
  override def persistenceId = "sample-id-1"

  var state = PersistEvent()

  def updateEventState(event: Event): Unit =
    state = state.updated(event)

  def numberOfEvents =
    state.size

  val receiveRecover: Receive = {
    case evt: Event                                 => updateEventState(evt)
    case SnapshotOffer(_, snapshot: PersistEvent) => state = snapshot
  }

  val receiveCommand: Receive = {
    case Command(userDetails) =>
      persist(Event(userDetails))(updateEventState)
      persist(Event(userDetails)) { event =>
        updateEventState(event)
        context.system.eventStream.publish(event)
      }
    case "snap"  => saveSnapshot(state)
    case str: String => println(state)
  }

}

