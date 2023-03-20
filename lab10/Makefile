CASE=:

all: lab10
	@echo "Compilation Successful"

lab10: lab10.cpp
	@g++ -Wall -std=c++11 -O0 -g3 $< -o $@

test: lab10 gs.zip
	@bash gs/scripts/grade.sh --case $(CASE)

tests: lab10 gs.zip
	@bash gs/scripts/grade.sh --all

leaks: lab10 gs.zip
	@bash gs/scripts/grade.sh --leaks

canvas: lab10 gs.zip
	@make test CASE=gs/in/z1-canvas.txt

clean:
	rm -rf gs gs.zip lab10 out.txt log valgrind.log

Makefile: FORCE
	@echo "Checking for updates to Makefile..."
	@curl --silent https://raw.githubusercontent.com/Ethan0429/cs102-writeups/tree/main/lab10/Makefile -o Makefile.tmp
	@cmp -s Makefile.tmp Makefile && rm Makefile.tmp || (mv -f Makefile.tmp Makefile && echo "Updated Makefile - Restarting Makefile...")

gs.zip: FORCE
	@echo "Checking for updates to gs.zip..."
	@curl --silent -L https://github.com/Ethan0429/cs102-writeups/raw/main/labs/lab10/gs.zip -o gs.zip.tmp
	@cmp -s gs.zip.tmp gs.zip && rm gs.zip.tmp || (mv -f gs.zip.tmp gs.zip && echo "Updated gs.zip")
	@unzip -o -q gs.zip

FORCE:
