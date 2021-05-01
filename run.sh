#!/bin/bash

install(){
  sudo apt install build-essential ruby-dev ruby-bundler
  bundle install
}

run(){
  bundle exec jekyll serve
}

{
  $@
  if [ $# == 0 ]
  then
    run
  fi
}
