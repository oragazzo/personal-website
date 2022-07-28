// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  get: string
}

// export const getSpotifySong = async () => {
//   const response = await fetch(`https://api.spotify.com/v1/search?q=slipknot&type=track`)
//   const data = await response.json()
//   return {
//     props: { data },
//     revalidate: 60  //In seconds
//   }

//   // fetch("https://api.spotify.com/v1/me/player/currently-playing", {
//   //   headers: {
//   //     Accept: "application/json",
//   //     Authorization: "Bearer BQB03vu1JqgAxOixr_8plIKvIA53KcV5uE276iIjWNtnrCsGfx8ZUEvhKIWv32nwMuyECkxHUu3rfHxTsQtuNlVrRvXp5I4htLGwwjlcgt2DU8JNJsvVIV1EumBVWLz8SPptcHQnT51hxki78NkDYaDu_GMsFBJl5TJNE5_w471_hf5xSw",
//   //     "Content-Type": "application/json"
//   //   }
//   // })
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ get: 'Out' })
}
