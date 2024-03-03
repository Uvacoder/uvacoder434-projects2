import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

export default {
  name: 'CastiaMC',
  description: "Developing flexible, scalable, and maintainable Minecraft networks across OxyWire's servers.",
  href: 'https://castiamc.com',

  avatar,
  banner,

  start: 'Nov 2022',
  // No end date, still working with them

  projects: [
    {
      name: 'CastiaMC',
      description: 'CastiaMC is a Minecraft Java server that focuses on an enhanced, polished survival experience.',

      links: [
        {
          name: 'Website',
          href: 'https://castiamc.com',
        },
      ],
    },
  ],
} satisfies Client;
