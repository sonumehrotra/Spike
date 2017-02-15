package com.knoldus.api

/**
  * Created by dhirendra on 8/2/17.
  */

import akka.actor._
import akka.persistence._

case class Command(data: String)
case class Event(data: String)

case class PersistEvent(events: List[String] = Nil) {
  def updated(evt: Event): PersistEvent = copy(evt.data :: events)
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
    case Command(data) =>
      persist(Event(s"${data}-${numberOfEvents}"))(updateEventState)
      persist(Event(s"${data}-${numberOfEvents + 1}")) { event =>
        updateEventState(event)
        context.system.eventStream.publish(event)
      }
    case "snap"  => saveSnapshot(state)
    case "print" => println(state)
  }

}

