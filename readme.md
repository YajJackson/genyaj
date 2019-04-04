# Gentardator

Helps perform asynchronous tasks on regular interval using javascript generators and recursion.

## Usage
```
npm i gentardator
```

```javascript
import { Generate } from 'gentardator'

Generate({
  task: () => console.log('updated'), // @function @required runs every _interval_
  stop: () => stop, // @function @optional stop generator when evaluates to true
  interval: 1000 // @number @required time between _task_ execution (ms)
})
```

## Example: with React Hooks

```javascript
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Generate } from 'gentardator'

const ItemDisplay = () => {
    const [items, setItems] = useState([])

    const getItemUpdates = async () => {
        const { data } = await axios.get(API)
        setItems(data)
    }

    useEffect(() => {
        Generate({
            task: getItemUpdates,
            interval: 5000
        })
    }, [])

    return (
        <div>
            {items.map(item => <p>{item.name}</p>)}
        </div>
    )
}
```
