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

$ cd Spike
$ sbt "run-main com.knoldus.auth.sample.SampleAcn" -Djava.security.auth.login.config=src/main/scala/com/knoldus/auth/sample_jaas.config

It will prompt you to enter user name and password: 

Expected username is: "testUser"
Expected password is: "testPassword"

