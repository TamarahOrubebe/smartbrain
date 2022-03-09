BEGIN TRANSACTION;

INSERT INTO users(name, email, entries, joined) VALUES ('tamara', 'paulorubebe@yahoo.com', 3, '2020-01-01');
INSERT INTO login(hash, email) VALUES ('$2a$10$yPY9QQYi6Zm2gWv.5QC9DOnUCEs1l3R1OVzkyiq7VtEZ6VSzF/WmO', 'paulorubebe@yahoo.com');

COMMIT;
