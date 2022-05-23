export default function redirectHandler(req, res) {
    const destination = req.query.to;

    if (destination) return res.status(301).redirect(destination);

    return res.redirect("/400");
}
