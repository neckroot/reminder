export const enum Status {
  new = 'Новый',
  executed = 'Исполнен',
  planned = 'Запланирован',
  expired = 'Просрочен'
}

export interface Reminder {
    status: Status,
    shortDescription: string,
    fullDescription: string,
    creationDatetime: Date,
    dueDatetime: Date
}