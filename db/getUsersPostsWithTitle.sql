
SELECT *
FROM posts p
JOIN users u ON p.userid = u.userid
WHERE u.userid != $1
AND LOWER(p.title) = LOWER($2);