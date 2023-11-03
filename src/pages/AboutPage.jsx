import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About this Project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0.0</p>
        </div>
        <p>
            <a href="/">Back to Home</a>
        </p>
    </Card>
  )
}

export default AboutPage