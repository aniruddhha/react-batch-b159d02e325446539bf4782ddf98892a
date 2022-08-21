
console.log('hello')

import { speed } from './car'

export function deploy() {
    console.log('deploying')
}

deploy()

export function calculateSpeed() {
    console.log('Speed is' + speed )
}

deploy()