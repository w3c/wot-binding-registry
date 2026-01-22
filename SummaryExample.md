#### Abstract

In the Web of Things (WoT), a Binding is a blueprint that provides guidance toward implementing a specific IoT protocol,
data format, or IoT platform. The WoT Thing Description specification explains the overall mechanism, and the WoT
Binding Registry provides the formal requirements that any binding ought to follow. This document is a binding for the
Modbus protocol, which is a well-known and cost-effective IoT protocol for communication between industrial control and
automation devices.

More specifically, this document defines a set of vocabulary terms that can be used inside a Thing Description document,
and associated rules which allow description of WoT operations using the Modbus protocol over the network. Relevant
examples showcasing different vocabulary terms and the associated behaviors are also provided.

#### Examples

##### A Modbus Device

```json
{
  "@context": [
    "https://www.w3.org/2019/wot/td/v1",
    {
      "modv": "https://w3c.github.io/wot-binding-templates/bindings/protocols/modbus/context.jsonld"
    }
  ],
  "title": "ModbusPLC",
  "description": "An industrial machine, retrofitted to be IoT capable.",
  "id": "uri:dev:ModbusTCPThing",
  "securityDefinitions": {
    "nosec_sc": {
      "scheme": "nosec"
    }
  },
  "security": "nosec_sc",
  "base": "modbus+tcp://192.168.178.32:502/1/",
  "properties": {
    "limitSwitch1": {
      "title": "downLimitSwitch",
      "type": "boolean",
      "description": "Limit switch moving downwards",
      "forms": [
        {
          "op": "readproperty",
          "href": "10003",
          "modv:function": "readDiscreteInput",
          "contentType": "application/octet-stream"
        }
      ]
    },
    "limitSwitch2": {
      "title": "forwardLimitSwitch",
      "type": "boolean",
      "description": "Limit Switch moving forward",
      "forms": [
        {
          "op": "readproperty",
          "href": "10002",
          "modv:function": "readDiscreteInput",
          "contentType": "application/octet-stream"
        }
      ]
    },
    "moveDown": {
      "title": "moveDown",
      "type": "boolean",
      "description": "Down Motor Status (single coil). PLC output, can be written to control the motor.",
      "forms": [
        {
          "op": ["writeproperty", "observeproperty", "readproperty"],
          "href": "6",
          "modv:entity": "Coil",
          "modv:pollingTime": 100,
          "contentType": "application/octet-stream"
        }
      ]
    },
    "moveForward": {
      "title": "moveForward",
      "type": "boolean",
      "description": "Forward Motor Status (single coil). PLC output, can be written to control the motor.",
      "forms": [
        {
          "op": ["writeproperty", "observeproperty", "readproperty"],
          "href": "3",
          "modv:entity": "Coil",
          "modv:pollingRate": 100,
          "contentType": "application/octet-stream"
        }
      ]
    }
  }
}
```

##### Read and write single coil

```json
[
  {
    "href": "modbus+tcp://127.0.0.1:60000/1/1",
    "op": ["readproperty"],
    "modv:function": "readCoil"
  },
  {
    "href": "modbus+tcp://127.0.0.1:60000/1/1",
    "op": ["writeproperty"],
    "modv:function": "writeCoil"
  }
]
```

#### Access and Usage Restrictions

Reading: Open and free to read Implementation: [Royalty-free patent policy](https://www.w3.org/policies/patent-policy/)

#### Dependent Bindings

- Octet Stream Binding

#### Available machine-readable documents (Schema, Ontology, JSON-LD Context)

- Schema: <https://github.com/w3c/wot-binding-templates/blob/main/bindings/protocols/modbus/modbus.schema.json>
- Ontology: <https://github.com/w3c/wot-binding-templates/blob/main/bindings/protocols/modbus/ontology.ttl>
- JSON-LD Context: <https://github.com/w3c/wot-binding-templates/blob/main/bindings/protocols/modbus/context.jsonld>

#### Link to the previous summary document

<https://github.com/w3c/wot-binding-templates/blob/main/publication/modbus/20260122/Summary.md>

#### Explanation about the versioning and ordering mechanism

We follow a date as the only versioning mechanism.
