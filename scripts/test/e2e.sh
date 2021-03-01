cd ./test/unit

check_file = 'ls | grep ".spec.tsx" | tr -s "\n" " "'

jest --findRelatedTests $check_file