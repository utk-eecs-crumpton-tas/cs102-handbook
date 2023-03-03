# Define color codes
CYAN = \033[36m
YELLOW = \033[33m
RESET = \033[0m

CCFLAGS = -g -std=c++11
BINARY = bowling
SOURCES = $(BINARY).cpp
ZIP = tests.zip
LAB = lab7

all: $(BINARY)

$(BINARY): $(SOURCES)
	g++ -o $(BINARY) $(SOURCES) $(CCFLAGS)

input1.txt:
	curl https://pastebin.com/raw/7f2wVQ1a --output input1.txt

input2.txt:
	curl https://pastebin.com/raw/wfVRnrvj --output input2.txt

.PHONY: help random test1 test2 Makefile $(ZIP)
FORCE:

test1: $(BINARY) input1.txt
	./$(BINARY) < input1.txt | sed 's/: /:\n/g'

test2: $(BINARY) input2.txt
	./$(BINARY) < input2.txt | sed 's/: /:\n/g'

random: $(BINARY) generate_tests.py $(ZIP)
	@python3 generate_tests.py
	@echo "$(YELLOW)Running $(BINARY) with random test cases...$(RESET)"
	@echo "$(CYAN)Left is the expected output, right is your output - empty -> match$(RESET)"
	@bash cmp.sh $(BINARY)

generate_tests.py:
	curl https://raw.githubusercontent.com/Ethan0429/cs102-writeups/main/$(LAB)/generate_tests.py --output generate_tests.py

help:
	@echo
	@echo "$(YELLOW)Available commands$(RESET)"
	@echo
	@echo "$(CYAN)make$(RESET):          Compiles '$(SOURCES)' to binary file named '$(BINARY)'"
	@echo "$(CYAN)make test1$(RESET):    Run '$(BINARY)' with input1.txt"
	@echo "$(CYAN)make test2$(RESET):    Run '$(BINARY)' with input2.txt"
	@echo "$(CYAN)make random$(RESET):   Generate random test cases and compare your output to the expected output"

Makefile: FORCE
	@echo "Checking for updates to Makefile..."
	@curl --silent https://raw.githubusercontent.com/Ethan0429/cs102-writeups/main/$(LAB)/Makefile -o Makefile.tmp
	@cmp -s Makefile.tmp Makefile && rm Makefile.tmp || (mv -f Makefile.tmp Makefile && echo "Updated Makefile - Restarting Makefile...")

$(ZIP): FORCE
	@echo "Checking for updates to $(ZIP)..."
	@curl --silent -L https://github.com/Ethan0429/cs102-writeups/raw/main/$(LAB)/$(ZIP) -o $(ZIP).tmp
	@cmp -s $(ZIP).tmp $(ZIP) && rm $(ZIP).tmp || (mv -f $(ZIP).tmp $(ZIP) && echo "Updated $(ZIP)")
	@unzip -o -q $(ZIP) || @echo "Unable to unzip $(ZIP). Check that you have unzip installed."
