import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['simple-eel-10440-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c2ltcGxlLWVlbC0xMDQ0MCQ97cPkzzRj7ykpEC_Qv0ZkMxBfvHLat_K3op1w4FQ',
          password:
            'i0XKvwfFhFX0CEBSZ-0L1xnJ2PEFuUKKpb66YNaG4g1DugiElwAgDUVnhi-0R2GRlAA0_w==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
