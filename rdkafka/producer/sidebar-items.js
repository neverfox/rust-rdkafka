initSidebarItems({"struct":[["BaseProducer","Simple Kafka producer. This producer needs to be `poll`ed at regular intervals in order to serve queued delivery report callbacks. This producer can be cheaply cloned to create a new reference to the same underlying producer."],["DeliveryFuture","A future that will receive a `DeliveryReport` containing information on the delivery status of the message."],["DeliveryReport","Information returned by the producer after a message has been delivered or failed to be delivered."],["EmptyProducerContext","Simple empty producer context that can be use when the producer context is not required."],["FutureProducer","A producer with an internal running thread. This producer doesn't need to be polled. It can be cheaply cloned to get a reference to the same underlying producer. The internal thread can be terminated with the `stop` method or moving the `FutureProducer` out of scope."]],"trait":[["ProducerContext","A `ProducerContext` is a `Context` specific for producers. It can be used to store user-specified callbacks, such as `delivery`."]]});