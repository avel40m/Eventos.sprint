import React, { useEffect, useState } from 'react'
import { Layout } from '../layouts/Layout'
import { Card } from '../components/Card'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Details = ({data}) => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)


  useEffect(() => {
      axios.get('/src/data/data.json')
          .then(resp => {
              setTimeout(() => { 
                  setEvent(resp.data.events.filter(event => event._id == id))
                  setLoading(false)
              }, 1000);
          })
  }, [])
  return (
    <Layout data={data}>
        <Card loading={loading} event={event} />
    </Layout>
  )
}
