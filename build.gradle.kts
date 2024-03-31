plugins {
    application

    id("org.springframework.boot") version "2.7.4"

    kotlin("jvm") version "1.6.21"
    kotlin("plugin.spring") version "1.6.21"
    kotlin("plugin.allopen") version "1.6.21"
    kotlin("plugin.noarg") version "1.6.21"
}

group = "hk.burunduchan"

val kotlinVersion = "1.6.21"
val springVersion = "2.7.4"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-reflect:${kotlinVersion}")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:${kotlinVersion}")

    implementation("org.springframework.boot:spring-boot-starter-web:${springVersion}")

    testImplementation("org.springframework.boot:spring-boot-starter-test:${springVersion}")
}

tasks.withType<Test> {
    useJUnitPlatform()
}
