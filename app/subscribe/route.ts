// TODO: use https://www.npmjs.com/package/zod-form-data
// to validate form data

// POST /subscribe
export async function POST(request: Request) {
    const formData = await request.formData()

    const name = formData.get('name')
    const email = formData.get('email')

    return Response.json({ name, email })
}