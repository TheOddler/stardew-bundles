module Jekyll
    module MyFilters
        def number_with_delimiter(number, delimiter=",", separator=".")
            # https://gist.github.com/jpemberthy/484764
            begin
                parts = number.to_s.split('.')
                parts[0].gsub!(/(\d)(?=(\d\d\d)+(?!\d))/, "\\1#{delimiter}")
                parts.join separator
            rescue
                number
            end
        end

        def img_name_to_path(name)
            name = name.dup.to_s
            name.gsub!(' ', '_')
            name.gsub!("'", '')
            name.gsub!(':', '')
            name.gsub!(',', '')
            name.gsub!('(', '')
            name.gsub!(')', '')
            name.gsub!('Iv', 'IV')
            name.gsub!('Iii', 'III')
            name.gsub!('Ii', 'II')

            try_name = File.join("images", "32px-" + name + ".png")
            return try_name if file_exists(try_name)

            try_name = File.join("images", "24px-" + name + ".png")
            return try_name if file_exists(try_name)

            try_name = File.join("images", "18px-" + name + ".png")
            return try_name if file_exists(try_name)

            try_name = File.join("images", name + ".png")
            return try_name if file_exists(try_name)

            return ""
        end

        def file_exists(path)
            return File.file?(path)
        end

        def defaultAllowFalse(input, default_value = '')
            input.nil? || (input.respond_to?(:empty?) && input.empty?) ? default_value : input
        end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::MyFilters)