import { Room } from '../rooms/entities';
import { User } from '../users/entities';
export declare class Comment {
    id: number;
    room_id: number;
    room: Room;
    created_by_id: number;
    created_by: User;
    date: Date;
    content: string;
    rated: number;
}
