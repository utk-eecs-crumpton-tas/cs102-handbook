FROM ubuntu:latest

# install c++ dev tools
RUN apt-get update && apt-get install -y \
    build-essential \
    make \
    unzip \
    curl \
    wget

# install zsh
RUN apt-get install -y zsh \
    git

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.3/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p git \
    -p ssh-agent \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions

# set zsh as default shell
RUN chsh -s /bin/zsh

# install valgrind
RUN apt-get install -y valgrind

# start
WORKDIR /root

# run
CMD ["/bin/zsh"]