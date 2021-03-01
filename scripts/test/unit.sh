cd ./tests/unit || exit
check_file=`ls  | grep ".spec.ts" |  tr -s "\n"  " "`
jest --coverage --findRelatedTests $check_file