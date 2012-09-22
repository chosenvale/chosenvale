require 'closync'
require 'grit'

task :check_branch do
  correct_branch = 'develop'
  if Grit::Repo.new(Dir.pwd).head.name == correct_branch
    puts "Building the #{correct_branch} branch"
  else
    raise "Only authorized to build the #{correct_branch} branch."
  end
end

task :build do
  puts `bundle exec middleman build`
end

task :sync do
  puts 'Beginning push...'
  Closync.push!
  puts 'push complete!'
end

task :deploy => [:check_branch, :build, :sync] do
  puts "Deployed!"
end
