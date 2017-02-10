package com.knoldus.amps

import com.crankuptheamps.client.Client
import com.crankuptheamps.client.exception.AMPSException

/** This Object Instantiates an AMPS Client
  * */

object Publisher {

  /**
    * @param name Name of the AMPS client
    * @param connectionUrl The AMPS server URL
    * @return AMPS client logged in with given credentials
    */
  def getPublisherClient(name:String, connectionUrl:String):Client = {
    val client = new Client(name)
    client.connect(connectionUrl)
    client.logon
    client
  }
}
