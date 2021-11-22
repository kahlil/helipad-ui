import { useEffect, useState } from 'react'

function normalizeBoostsData(boostsJSON: any) {
  const normalizedBoosts = boostsJSON.map((boost: any) => {
    let tlvJSON
    try {
      tlvJSON = JSON.parse(boost.tlv)
    } catch (error) {
      console.error({
        message: 'It looks like the TLV data could not be parsed as JSON.',
        error,
      })
    }
    if (tlvJSON) {
      boost.value_msat = (tlvJSON.value_msat_total || boost.value_msat) / 1000
      boost.sender = tlvJSON.sender_name || boost.sender
      boost.app = tlvJSON.app_name || boost.app
      boost.message = tlvJSON.message || boost.message
      boost.podcast = tlvJSON.podcast || boost.podcast
    }
    boost.time = boost.time * 1000
    return boost
  })
}

function useBoosts() {
  const [boosts, setBoosts] = useState<any>([])
  useEffect(() => {
    async function fetchBoosts() {
      const response = await fetch('/api/boosts')
      const boostsJSON = await response.json()
      normalizeBoostsData(boostsJSON)
      setBoosts(boostsJSON)
    }
    fetchBoosts()
  }, [])
  return boosts
}

export { useBoosts }
