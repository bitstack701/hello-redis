const Redis = require('ioredis')
const redis = new Redis()

async function step1() {
  redis.set('foo', 'bar')
  const ans = await redis.get('foo')
  console.log(ans);
  return "Job Done"
}

step1().then(ans => {
  console.log(ans)
  redis.disconnect()
})

