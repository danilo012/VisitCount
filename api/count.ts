import { VercelRequest, VercelResponse } from "@vercel/node";
import { makeBadge } from "badge-maker";
import axios from "axios";
import forge from 'node-forge';

export default async (req: VercelRequest, res: VercelResponse) => {
	const { id, label = 'Visotors', labelColor = '#555', color = '#4C1' } = req.query

	// Check query params

	if (id == null || id == '') {
		res.json({ error: 'The "id" field is required' })
		return
	}

	if (id instanceof Array) {
		res.json({ error: 'The "id" field should be unique in query params' })
		return
	}

	if (label instanceof Array) {
		res.json({ error: 'The "label" field should be unique in query params' })
		return
	}

	if (labelColor instanceof Array) {
		res.json({ error: 'The "labelColor" field should be unique in query params' })
		return
	}

	if (color instanceof Array) {
		res.json({ error: 'The "color" field should be unique in query params' })
		return
	}

	const reg = /^[A-Za-z0-9_\-.]{3,64}$/g
	if (!reg.test(id)) {
		res.json({ error: 'The "id" should conform to regex ^[A-Za-z0-9_\-.]{3,64}$' })
		return
	}

	const md = forge.md.md5.create()
	md.update(id)
	const key = md.digest().toHex()

	const { data } = await axios.get(`https://api.countapi.xyz/hit/visit-count/${key}`)
	const cnt = data.value

	if (cnt == null) {
		res.json({ error: 'Count API error.' })
		return
	}

	try {
		res.setHeader('Content-Type', 'image/svg+xml')
		res.send(
			makeBadge({
				label,
				message: `${cnt}`,
				labelColor,
				color,
			})
		)
	} catch (e) {
		res.send({ error: e.message })
	}

};
