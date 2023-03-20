RANDOM:=$(shell date +%s)

all: gradescript.zip lab11
	@echo "Compilation Successful"

lab11: lab11.cpp
	@g++ -Wall -O0 -g -std=c++11 $< -o $@

tests: gradescript.zip lab11
	@rm gs/out* 2>/dev/null || true
	@echo 'Running tests...'
	@echo '----------------'
	@bash grade.sh
	@rm gs/out* 2>/dev/null || true

tests-nf: gradescript.zip lab11
	@rm gs/out* 2>/dev/null || true
	@echo 'Running tests...'
	@echo '----------------'
	@bash grade.sh --no-fail
	@rm gs/out* 2>/dev/null || true

test: lab11 out.ppm sol.ppm
	@diff -y out.ppm sol.ppm | less

clean:
	rm -rf gs gradescript.zip out.ppm sol.ppm grade.sh lab11

out.ppm:
	@echo "out.ppm does not exist. Your program likely is not outputting correctly."

sol.ppm:
	@echo "sol.ppm does not exist. Your program likely is not outputting correctly."
	@exit 1

Makefile: FORCE
	@echo "Checking for updates to Makefile..."
	@curl --silent https://raw.githubusercontent.com/Ethan0429/cs102-writeups/tree/main/lab11/Makefile?$(RANDOM) -o Makefile.tmp
	@cmp -s Makefile.tmp Makefile && rm Makefile.tmp || (mv -f Makefile.tmp Makefile && echo "Updated Makefile - Restarting Makefile...")

gradescript.zip: FORCE
	@echo "Checking for updates to gradescript.zip..."
	@curl --silent -L https://github.com/Ethan0429/cs102-writeups/raw/main/labs/lab11/gradescript.zip?$(RANDOM) -o gradescript.zip.tmp
	@cmp -s gradescript.zip.tmp gradescript.zip && rm gradescript.zip.tmp || (mv -f gradescript.zip.tmp gradescript.zip && echo "Updated gradescript.zip")
	@unzip -o -q gradescript.zip

FORCE:
