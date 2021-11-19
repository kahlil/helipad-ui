// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const boosts = [
  {
    amount: '1,000',
    from: 'Dave',
    via: 'Podfriend',
    podcast: 'Dave',
  },
  {
    amount: '2,000',
    from: 'Kahlil',
    via: 'Fountain',
    podcast: 'Podcasting 2.0',
    boostagram: 'Yo! Fauci boost 🎉',
    unread: true,
  },
  {
    amount: '500,000',
    from: 'Anonymous',
    via: 'Fountain',
    podcast: 'Podcasting 2.0',
    boostagram:
      'Just testing the boostagram functionality. Hey Dave and Adan how did you actually meet?',
    unread: true,
  },
  {
    amount: '1,000',
    from: 'Anonymous',
    via: 'Fountain',
    podcast: 'No Agenda',
  },
  {
    amount: '1,000',
    from: 'Anonymous',
    via: 'Fountain',
    podcast: 'No Agenda',
  },
  {
    amount: '7,777',
    from: 'Jame Dennifer',
    via: 'Podfriend',
    podcast: 'Moe Factz with Adam Curry',
    boostagram: 'Running my Sphinx dry...',
    unread: true,
  },
  {
    amount: '1,000',
    from: 'Ben',
    via: 'Podfriend',
    podcast: 'What Bitcoin Did',
    boostagram: 'Nice interview!',
    unread: true,
  },
  {
    amount: '12,345',
    from: 'Anonymous',
    via: 'Fountain',
    podcast: 'No Agenda',
    boostagram: 'Boost!',
    unread: true,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(boosts)
}
