import React from 'react'
import { Layout } from '../layouts/Layout'
import { Card } from '../components/Card'

export const Details = ({data}) => {
  return (
    <Layout data={data}>
        <Card />
    </Layout>
  )
}
