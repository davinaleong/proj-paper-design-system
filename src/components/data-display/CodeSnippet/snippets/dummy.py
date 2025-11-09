# dummy_script.py
# A simple Python example for testing purposes

def greet_user(name: str) -> str:
    """Return a greeting message for the given user."""
    return f"Hello, {name}! This is a dummy Python script for testing."

def main():
    users = ["Alice", "Bob", "Charlie"]
    for user in users:
        print(greet_user(user))

if __name__ == "__main__":
    main()
