package com.knoldus.persistence

import com.typesafe.slick.driver.ms.SQLServerDriver.api._
import scala.async.Async.{async, await}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object PlainSQLHelper {

  def selectScalarObject(db: Database): Unit = {

    val action = sql"""Select count(*) as 'sysobjectsCount'  from sysobjects""".as[Int]
    val futureDB: Future[Vector[Int]] = db.run(action)

    async {
      val sqlData = await(futureDB)
      val count = sqlData.head
      println(s"PlainSQLHelper.selectScalarObject() sysobjectsCount: $count")
    } onFailure {
      case e => {
        println(s"ERROR : $e")
      }
    }
  }


  def selectTupleObject(db: Database): Unit = {

    val action = sql"""Select count(*)  as 'sysobjectsCount', count(*)/10  as 'sysobjectsCountDiv10' from sysobjects""".as[(Int, Int)]
    val futureDB: Future[Vector[(Int, Int)]] = db.run(action)

    async {
      val sqlData = await(futureDB)
      val (x, y) = sqlData.head
      println(s"PlainSQLHelper.selectTupleObject() sysobjectsCount: $x, sysobjectsCountDiv10: $y")
    } onFailure {
      case e => {
        println(s"ERROR : $e")
      }
    }
  }


  def getDetailsForId(id: Int) = {

    val database: Database = Database.forConfig("dms")
    val action = sql"""Select * from Person where id=$id""".as[(Int, String, String, Int)]
    database.run(action) map {
      case sqlData: Seq[(Int, String, String, Int)] => {
        val (userId, name, gender, age) = sqlData.head
        val item = UserDetails(id, name, gender, age)
        s"PlainSQLHelper.selectRawTableObject() Id: ${item.id}, Name: ${item.name}, Gender: ${item.gender}, Age: ${item.age}"
      }
      case _ => s"Error"
    }
  }

  def insertUsersDetails(userDetails: UserDetails) = {
    val database: Database = Database.forConfig("dms")
    val action = sql"""INSERT INTO Person VALUES (${userDetails.id}, ${userDetails.name}, ${userDetails.gender},${userDetails.age});""".as[String]
    database.run(action) map {
      case item => "User details inserted successufully"
      case _ => "Error"
    }

  }

  def deleteUserDetails(id: Int) = {

    val database: Database = Database.forConfig("dms")
    val action = sql"""DELETE FROM Person WHERE id=$id;""".as[String]
    database.run(action) map {
      case item => "User details deleted successufully"
      case _ => "Error"
    }
  }

  def updateUserDetails(userDetails: UserDetails) = {

    val database: Database = Database.forConfig("dms")
    val s = s"""UPDATE Person SET name='${userDetails.name}',gender='${userDetails.gender}',age='${userDetails.age}' WHERE id=${userDetails.id};"""
    val action = sql"""UPDATE Person SET name='${userDetails.name}',gender='${userDetails.gender}',age='${userDetails.age}' WHERE id=${userDetails.id};""".as[String]
    database.run(action) map {
      case item => "User details updated successufully"
      case _ => "Error"
    }
  }


  case class UserDetails(id: Int, name: String, gender: String, age: Int)

}
