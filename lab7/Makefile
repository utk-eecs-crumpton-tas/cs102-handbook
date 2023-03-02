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
