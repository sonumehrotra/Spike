import org.scalatra.sbt._
import org.scalatra.sbt.PluginKeys._
import ScalateKeys._

val ScalatraVersion = "2.5.0"

ScalatraPlugin.scalatraSettings

scalateSettings

organization := "com.knoldus"

name := "MyFirstScalatra"

version := "0.1.0-SNAPSHOT"

scalaVersion := "2.11.8"

resolvers += Classpaths.typesafeReleases

libraryDependencies ++= Seq(
  "org.scalatra" %% "scalatra" % ScalatraVersion,
  "org.scalatra" %% "scalatra-scalate" % ScalatraVersion,
  "org.scalatra" %% "scalatra-specs2" % ScalatraVersion % "test",
  "org.scalatra" %% "scalatra-scalatest" % "2.4.1" % "test",
  "ch.qos.logback" % "logback-classic" % "1.1.5" % "runtime",
  "org.eclipse.jetty" % "jetty-webapp" % "9.2.15.v20160210" % "container",
  "javax.servlet" % "javax.servlet-api" % "3.1.0" % "provided",
  "org.scalatest" % "scalatest_2.11" % "3.0.1",
  "info.cukes" % "cucumber-core" % "1.2.4",
  "info.cukes" % "cucumber-junit" % "1.2.4",
  "info.cukes" % "cucumber-scala_2.11" % "1.2.5",
  "info.cukes" % "cucumber-jvm" % "1.2.4",
  "org.mockito" % "mockito-core" % "1.9.5",
  "com.waioeka.sbt" %% "cucumber-runner" % "0.0.5"
)

scalateTemplateConfig in Compile := {
  val base = (sourceDirectory in Compile).value
  Seq(
    TemplateConfig(
      base / "webapp" / "WEB-INF" / "templates",
      Seq.empty,  /* default imports should be added here */
      Seq(
        Binding("context", "_root_.org.scalatra.scalate.ScalatraRenderContext", importMembers = true, isImplicit = true)
      ),  /* add extra bindings here */
      Some("templates")
    )
  )
}

dependencyOverrides += "org.scala-lang" % "scala-compiler" % scalaVersion.value

enablePlugins(JettyPlugin)

enablePlugins(CucumberPlugin)

CucumberPlugin.glue := "com/knoldus/login/"

testFrameworks += new TestFramework("com.knoldus")

