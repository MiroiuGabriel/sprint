import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const publicApiKey = import.meta.VITE_PUBLICK_KEY;

console.log('api-key', publicApiKey);

const client = createClient({
	publicApiKey,
});

export const { RoomProvider } = createRoomContext(client);
