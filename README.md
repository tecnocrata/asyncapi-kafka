# Asyncapi generator installation

```
npm install -g @asyncapi/generator
```

# Helloworld project generation

```
ag ./helloworld.yml @asyncapi/nodejs-template -p server=production -o hello-example
```

# Kafka & Zookeeper lunch

```
docker-compose up --build --remove-orphans
```
