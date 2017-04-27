(
  printf "Checking Code Style... "
  standard > stdout.tmp 2> stderr.tmp && (
    echo "passed"
  ) || (
    echo "failed" >&2
    cat stderr.tmp >&2
    cat stdout.tmp
    exit 2
  )
) && (
  printf "Running Unit Test... "
  node test > stdout.tmp 2> stderr.tmp && (
    echo "passed"
    cat stdout.tmp
  ) || (
    echo "failed"
    cat stderr.tmp >&2
    exit 3
  )
)
