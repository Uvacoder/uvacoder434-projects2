import { getArtists } from '$lib/data/commissions';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => json(await getArtists());
