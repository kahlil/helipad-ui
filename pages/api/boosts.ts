// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const boosts = [
  {
    index: 8233,
    time: 1636558003,
    value_msat: 132000,
    action: 2,
    sender: '@dave',
    app: 'Fountain',
    message: 'Boostagram test from Fountain!',
    podcast: 'The Law',
    episode: '1. Life is a Gift from God',
    tlv: '{"app_name":"Fountain","name":"Podcaster","podcast":"The Law","feedID":1382222,"url":"https://cart.sobr.org/bastiat/bastiatLawPodcast.xml","episode":"1. Life is a Gift from God","itemID":1723947233,"ts":24,"message":"Boostagram test from Fountain!","sender_name":"@dave","time":"00:24","action":"boost","value_msat_total":133000}',
    unread: true,
  },
  {
    index: 8234,
    time: 1636558126,
    value_msat: 60000,
    action: 0,
    sender: '',
    app: '',
    message: '',
    podcast: '',
    episode: '',
    tlv: '{"podcast":"The Law","feedID":1382222,"episode":"1. Life is a Gift from God","action":"stream","ts":60,"app_name":"CurioCaster","speed":1,"name":"Podcaster","url":"https://cart.sobr.org/bastiat/bastiatLawPodcast.xml","sender_id":"VudSW6JRZepnadTvHVEwYrAe"}',
  },
  {
    index: 8235,
    time: 1636558439,
    value_msat: 113000,
    action: 0,
    sender: '',
    app: '',
    message: '',
    podcast: '',
    episode: '',
    tlv: '{"podcast":"The Law","episode":"1. Life is a Gift from God","action":"boost","time":"00:00:15","feedID":"1382222","app_name":"Breez","value_msat_total":"123000","message":"Test from Breez. "}',
  },
  {
    index: 8236,
    time: 1636558440,
    value_msat: 1000000,
    sender: 'Dave',
    app: 'Podfriend',
    podcast: 'No Agenda',
    tlv: '{}',
  },
  {
    index: 8237,
    time: 1636558441,
    value_msat: 2000000,
    sender: 'Kahlil',
    app: 'Fountain',
    podcast: 'Podcasting 2.0',
    message: 'Yo! Fauci boost 🎉',
    unread: true,
    tlv: '{}',
  },
  {
    index: 8260,
    time: 1636558445,
    value_msat: 500000000,
    sender: 'Anonymous',
    app: 'Fountain',
    podcast: 'Podcasting 2.0',
    message:
      'Just testing the boostagram functionality. Hey Dave and Adan how did you actually meet?',
    unread: true,
    tlv: '{}',
  },
  {
    index: 8238,
    time: 1636558442,
    value_msat: 1000000,
    sender: 'Anonymous',
    app: 'Fountain',
    podcast: 'No Agenda',
    message: '',
    tlv: '{}',
  },
  {
    index: 8239,
    time: 1636558450,
    value_msat: 1000000,
    sender: 'Anonymous',
    app: 'Fountain',
    podcast: 'No Agenda',
    tlv: '{}',
  },
  {
    index: 8240,
    time: 1636558455,
    value_msat: 7777000,
    sender: 'Jame Dennifer',
    app: 'Podfriend',
    podcast: 'Moe Factz with Adam Curry',
    message: 'Running my Sphinx dry...',
    unread: true,
    tlv: '{}',
  },
  {
    index: 8241,
    time: 1636558455,
    value_msat: 1000000,
    sender: 'Ben',
    app: 'Podfriend',
    podcast: 'What Bitcoin Did',
    message: 'Nice interview!',
    unread: true,
    tlv: '{}',
  },
  {
    index: 8244,
    time: 1636558459,
    value_msat: 12345000,
    sender: 'Anonymous',
    app: 'Fountain',
    podcast: 'No Agenda',
    message: 'Boost!',
    unread: true,
    tlv: '{}',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(boosts)
}
