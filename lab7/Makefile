# Define color codes
CYAN = \033[36m
YELLOW = \033[33m
RESET = \033[0m

all: bowling

bowling: bowling.cpp
	g++ -o bowling bowling.cpp -g -std=c++11

input1.txt:
	curl https://pastebin.com/raw/7f2wVQ1a --output input1.txt

input2.txt:
	curl https://pastebin.com/raw/wfVRnrvj --output input2.txt

test1: bowling input1.txt
	./bowling < input1.txt | sed 's/: /:\n/g'

test2: bowling input2.txt
	./bowling < input2.txt | sed 's/: /:\n/g'

random: bowling generate_tests.py
	python3 generate_tests.py
	./bowling < test.txt | sed 's/: /:\n/g'

generate_tests.py:
	curl https://raw.githubusercontent.com/Ethan0429/cs102-writeups/main/lab7/generate_tests.py --output generate_tests.py

.PHONY: help

help:
	@echo "$(YELLOW)Available commands$(RESET)"
	@echo
	@echo "$(CYAN)make$(RESET):          Compiles bowling.cpp to binary file named bowling"
	@echo "$(CYAN)make test1$(RESET):    Run bowling program with input1.txt"
	@echo "$(CYAN)make test2$(RESET):    Run bowling program with input2.txt"
	@echo "$(CYAN)make random$(RESET):   Generate random test cases and run bowling program with them"
