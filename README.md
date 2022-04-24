# Asyncapi generator installation

```bash
npm install -g @asyncapi/generator
```

# Helloworld project generation

```bash
ag ./helloworld.yml @asyncapi/nodejs-template -p server=production -o hello-example
cd hello-example
npm install
npm start
```

Check file `config\common.yml` and update `topicSeparator` and `topicPrefix` according your publisher, some ones tend to create a topic with a prefix like `microcks`

Finally, update the handlers at `src\api\handlers` those will content the logic ultimately.

# Kafka & Zookeeper lunch

```
docker-compose up --build --remove-orphans
```

```bash
docker-compose logs kafka | grep -i started
docker-compose logs zookeeper | grep -i started
```

```bash
docker-compose exec kafka bash #to enter kafka
/bin/kafka-topics --create --topic hello --bootstrap-server localhost:9092 #inside the container: it creates the topic
```

### Send messages (from within the container)

```
/bin/kafka-console-producer --topic topic-name --bootstrap-server localhost:9092
# I still don't know how to send messages here
```

### Listen messages (not needed)

```
/bin/kafka-console-consumer --topic topic-name --from-beginning --bootstrap-server localhost:9092
```

# Using Microcks

```bash
docker-compose -f docker-compose-microks.yml -f docker-compose-microks-kafka-zookeeper.yml up --build --remove-orphan
```

Open a new browser tab and point to the http://localhost:8080 endpoint. This will redirect you to the Keycloak Single Sign On page for login. Use the following default credentials:

- Username: admin
- Password: microcks123

You will be redirected to the main dashboard page. You can now start using Microcks.
