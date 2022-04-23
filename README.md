# Asyncapi generator installation

```bash
npm install -g @asyncapi/generator
```

# Helloworld project generation

```bash
ag ./helloworld.yml @asyncapi/nodejs-template -p server=production -o hello-example
```

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
>....
```

### Listen messages (not needed)

```
/bin/kafka-console-consumer --topic topic-name --from-beginning --bootstrap-server localhost:9092
```
