import { Notification } from '@application/entitites/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsReposiory: NotificationsRepository) {}
  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsReposiory.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
