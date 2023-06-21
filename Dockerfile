# https://hub.docker.com/_/ruby
FROM ruby:3.0

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /usr/src/app

# copy gems first to cache bundle install
COPY Gemfile Gemfile.lock ./
RUN bundle install

# copy whole repo into the image
COPY . .
