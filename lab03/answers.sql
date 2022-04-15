-- Exercise 1 (done for you):
SELECT * FROM users;

-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;

-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name

-- Exercise 4
SELECT id, image_url, user_id
FROM posts
where user_id=26

-- Exercise 5
SELECT id, image_url, user_id
FROM posts
where user_id=26 OR user_id=12

-- Exercise 6
SELECT COUNT(*) 
FROM posts

-- Exercise 7
SELECT user_id, COUNT(*)
FROM comments
GROUP BY user_id

-- Exercise 8
SELECT posts.id, users.image_url, users.id, users.username, first_name, last_name
FROM users JOIN posts 
ON users.id = posts.user_id
WHERE user_id=12 or user_id=26

-- Exercise 9
SELECT posts.id, pub_date, following_id
FROM posts JOIN following
ON posts.user_id = following.following_id
WHERE following.user_id=26

-- Exercise 10
SELECT posts.id, pub_date, following_id 
FROM posts JOIN following JOIN users
ON posts.user_id = following.following_id and posts.user_id 
WHERE following.user_id=26

-- Exercise 11
INSERT INTO bookmarks(user_id,post_id,timestamp)
VALUES (26, 219, '2022-04-08 04:46:04.238135')

INSERT INTO bookmarks(user_id,post_id,timestamp)
VALUES (26, 220, '2022-04-08 17:46:04.23835')

INSERT INTO bookmarks(user_id,post_id,timestamp)
VALUES (26, 221, '2022-04-10 10:46:04.238647')

-- Exercise 12
DELETE FROM bookmarks
WHERE user_id = 26 and post_id = 219

DELETE FROM bookmarks
WHERE user_id = 26 and post_id = 220

DELETE FROM bookmarks
WHERE user_id = 26 and post_id = 221


-- or combine into single query like below

DELETE FROM bookmarks
WHERE user_id = 26 and post_id in (219, 220, 221)

-- Exercise 13
UPDATE users
SET email='knick2022@gmail.com'
WHERE id=26

-- Exercise 14
SELECT posts.id, posts.user_id, count(DISTINCT comments.id) as count, caption
FROM posts JOIN comments
ON posts.id = comments.post_id
WHERE posts.user_id=26
GROUP by posts.id