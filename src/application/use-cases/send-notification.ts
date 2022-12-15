import { Injectable } from '@nestjs/common';
import { Content } from '../entitites/content';
import { Notification } from '../entitites/notification';
import { NotificationsRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsReposiory: NotificationsRepository) {}
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsReposiory.create(notification);

    return {
      notification,
    };
  }
}
