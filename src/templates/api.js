import * as React from 'react'
import { RedocStandalone } from 'redoc';

const API = () => {
  return (<RedocStandalone specUrl="https://petstore.swagger.io/v2/swagger.json" />)
}

export default API
