__Work in progress__

# Genyaj

Helps perform asynchronous tasks on regular interval using javascript generators and recursion.

## Installation

```bash
npm i genyaj
```

```javascript
import { Generate } from 'genyaj'

Generate({
    /*
    @required
    @function
    Runs every _interval_
    */
    task: () => console.log('updated'),
    /*
    @optional
    @function
    Stop generator when evaluates to true
    */
    stop: () => stop,
    /*
    @optional
    @number
    @default 0
    Time (ms) between each _task_ execution
    If none, _task_s will run consecutively
    */
    interval: 1000
})
```

## Example with React Hooks

```javascript
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Generate } from 'genyaj'

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
