import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const publicApiKey = import.meta.env.VITE_PUBLIC_KEY;

const client = createClient({
	publicApiKey,
});

export const {
	suspense: { RoomProvider, useOthers, useUpdateMyPresence },
} = createRoomContext(client);
