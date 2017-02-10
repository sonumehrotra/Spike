# MyFirstScalatra #

## Build & Run ##

```sh
$ cd Spike
$ ./sbt
> jetty:start
> browse
```

If `browse` doesn't launch your browser, manually open [http://localhost:8080/](http://localhost:8080/) in your browser.


##How to Run auth Module: ##
```sh
$ cd Spike  
$ sbt "run-main com.knoldus.auth.sample.SampleAcn" -Djava.security.auth.login.config=src/main/scala/com/knoldus/auth/sample_jaas.config  
```  
It will prompt you to enter user name and password:   

Expected username is: "testUser"  
Expected password is: "testPassword"  


##Setting MySQL as persistent storage: ##  

* Install MySQL  

* Login as user: "root" and password: "root"  

* Create database "test"  

Run the following scripts to create persistent tables:  

```sh
CREATE TABLE IF NOT EXISTS persistence_metadata (
  persistence_key BIGINT NOT NULL AUTO_INCREMENT,
  persistence_id VARCHAR(255) NOT NULL,
  sequence_nr BIGINT NOT NULL,
  PRIMARY KEY (persistence_key),
  UNIQUE (persistence_id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS persistence_journal (
  persistence_key BIGINT NOT NULL,
  sequence_nr BIGINT NOT NULL,
  message BLOB NOT NULL,
  PRIMARY KEY (persistence_key, sequence_nr),
  FOREIGN KEY (persistence_key) REFERENCES persistence_metadata (persistence_key)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS persistence_snapshot (
  persistence_key BIGINT NOT NULL,
  sequence_nr BIGINT NOT NULL,
  created_at BIGINT NOT NULL,
  snapshot BLOB NOT NULL,
  PRIMARY KEY (persistence_key, sequence_nr),
  FOREIGN KEY (persistence_key) REFERENCES persistence_metadata (persistence_key)
) ENGINE = InnoDB;
```  

### Subscribing AMPS messages ###

* Before Running this Project your AMPS server must be running   
* Go to AMPSDIR (The directory where AMPS is located on the machine) and hit:   
```sh 
./bin/spark subscribe -server localhost:9007 -type json -topic messages

```  
Here "localhost:9007" is the server where AMPS is running"  

This will subscribe to messages that are being published on the topic "messages".  












