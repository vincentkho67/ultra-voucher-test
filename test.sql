SELECT t.id, t.name, t2.name AS parent_name
FROM test_table t
LEFT JOIN test_table t2 ON t.parent_id = t2.id
```